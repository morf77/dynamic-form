export default '';

// import { pathnameCreator } from '@/helpers/url';
// import { QUERY_PARAM } from '@/enums/query-param';
// import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

// const useQueryParam = ({ enabled = true }: { enabled?: boolean } = {}) => {
//   if (!enabled) {
//     return {
//       setQueryParam: () => {},
//       removeQueryParam: () => {},
//       getQueryParam: () => undefined,
//       removeAllQueryParams: () => {},
//       replaceQueryParam: () => {},
//       getFirstQueryParam: () => null,
//       removeQueryParams: () => {}
//     };
//   }

//   // if (typeof window === 'undefined') {
//   //   return {
//   //     setQueryParam: () => {},
//   //     removeQueryParam: () => {},
//   //     getQueryParam: () => undefined,
//   //     removeAllQueryParams: () => {},
//   //     replaceQueryParam: () => {},
//   //     getFirstQueryParam: () => null,
//   //     removeQueryParams: () => {}
//   //   };
//   // }

//   const params = useParams();

//   const queries = useSearchParams();

//   const newParams = { ...Object.fromEntries(queries.entries()) } as Record<string, string>;

//   const allQueryParams = { ...Object.fromEntries(queries.entries()), ...params } as Record<
//     string,
//     string
//   >;

//   const pathname = usePathname();

//   const router = useRouter();

//   const setQueryParam = (key?: QUERY_PARAM | null, value?: string | null, concat = false) => {
//     if (!key) {
//       return;
//     }

//     if (key !== QUERY_PARAM.PAGE) {
//       delete newParams[QUERY_PARAM.PAGE];
//     }

//     const queryValue = newParams[key] as string | undefined;

//     if (queryValue && value && queryValue.split(',').includes(value)) {
//       return;
//     }

//     if (concat && queryValue) {
//       newParams[key] = queryValue + ',' + value;
//     } else if (value) {
//       newParams[key] = value;
//     } else {
//       delete newParams[key];
//     }

//     router.push(pathnameCreator(pathname, newParams));
//   };

//   const replaceQueryParam = (key: QUERY_PARAM, value: string, concat = false) => {
//     if (key !== QUERY_PARAM.PAGE) {
//       delete newParams[QUERY_PARAM.PAGE];
//     }

//     const queryValue = newParams?.[key] as string | undefined;

//     if (queryValue && queryValue.split(',').includes(value)) {
//       return;
//     }

//     if (concat && queryValue) {
//       newParams[key] = queryValue + ',' + value;
//     } else {
//       newParams[key] = value;
//     }

//     router.replace(pathnameCreator(pathname, newParams));
//   };

//   const removeQueryParam = (key: QUERY_PARAM, value?: string, removePAGE = true) => {
//     if (removePAGE) {
//       delete newParams[QUERY_PARAM.PAGE];
//     }

//     const queryValue = newParams[key] as string | undefined;

//     if (value && !queryValue) {
//       return;
//     }

//     if (!value || queryValue === value) {
//       delete newParams[key];
//     } else {
//       newParams[key] = queryValue!
//         .split(',')
//         .filter(item => item !== value)
//         .join(',');
//     }

//     router.replace(pathnameCreator(pathname, newParams));
//   };

//   const removeQueryParams = (keys: QUERY_PARAM[]) => {
//     keys.forEach(key => delete newParams[key]);

//     router.replace(pathnameCreator(pathname, newParams));
//   };

//   const removeAllQueryParams = () => {
//     router.replace(pathname);
//   };

//   const getQueryParam = (key: QUERY_PARAM) => {
//     return allQueryParams[key] as string | undefined;
//   };

//   const getFirstQueryParam = (keys: QUERY_PARAM[]) => {
//     for (const key of keys) {
//       const param = getQueryParam(key);

//       if (param) {
//         return param;
//       }
//     }

//     return null;
//   };

//   return {
//     setQueryParam,
//     removeQueryParam,
//     getQueryParam,
//     removeAllQueryParams,
//     replaceQueryParam,
//     getFirstQueryParam,
//     removeQueryParams,
//     queries,
//     params
//   };
// };

// export default useQueryParam;
