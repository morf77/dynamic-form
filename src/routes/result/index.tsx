// In large scale projects, it's common to have a separate file for each route component.
// But here base on the simplicity of the example, we can keep it in one file.

import TableFilter from '../../components/factory/table-filter';
import { useGetFormResultsQuery } from '../../services/insurance';

const PageResult: FC = () => {
  const { data } = useGetFormResultsQuery();

  return (
    <div>
      <TableFilter columns={data?.columns} data={data?.data} />
    </div>
  );
};

export default PageResult;
