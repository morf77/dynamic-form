/* this helper use for clean object from certain values
 mostly used for cleaning from nullish values or empty strings for this reason we add this three values as default for remove
 first property of object parameter is the object that must be cleaned
 second property is the values that should be removed
 third property of this function used for set the number of nested object that should check */

export function objectCleaner<T = object>({
  object,
  shouldRemove = [undefined, null, ''],
  checkNested = 1000
}: {
  object: T;
  shouldRemove?: unknown[];
  checkNested?: number;
}): Partial<T> {
  type key = keyof T;

  const keyArray = Object.keys(object ?? {});

  const correctKeys = keyArray.filter(item => {
    let flag: boolean = true;

    shouldRemove.map((removed: any) => {
      const element = object[item as key];

      if (element === removed) {
        flag = false;
      } else if (
        checkNested &&
        typeof element === 'object' &&
        !Array.isArray(element) &&
        element !== null
      ) {
        object[item as key] = objectCleaner({
          object: element,
          shouldRemove,
          checkNested: checkNested - 1
        }) as T[key];
      }
    });

    return flag;
  });

  const newObject: Partial<T> = {};

  for (const element of correctKeys) {
    newObject[element as keyof T] = object[element as key];
  }

  return newObject;
}
