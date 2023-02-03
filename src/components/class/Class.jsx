import { useEffect, useState, Fragment } from 'react';
import ArticalBox from '@/components/globles/ArticalBox';
import { useRouteMatch } from 'umi';
import { getAllArticals } from '@/api/api';

const Class = () => {
  const router = useRouteMatch();
  // console.log(router);

  const [articalList, setArticalList] = useState([]);
  // const [data, setDate] = useState({
  //   articalList: ,
  // });

  useEffect(() => {
    getArticals();
  }, []);

  const getArticals = async () => {
    const { data: resData } = await getAllArticals({});
    console.log(resData.data.list);
    // data.articalList = resData.data.list;
    console.log(resData);
    setArticalList(resData.data.list);

    console.log(articalList);
    // console.log(data);
  };

  return (
    <div className="content">
      {articalList.map((item) => {
        console.log(item);
        return (
          <Fragment>
            <ArticalBox key={item.id} value={item} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Class;