import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Table({ columns, loading, dataSource, ...props }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const temp = [...dataSource];
    setDatas(temp);
  }, [dataSource]);

  return (
    <>
      {loading ? (
        <div className="bg-white absolute z-10 rounded-3xl inset-0 flex items-center justify-center">
          <div>Loading ...</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-grey-light flex flex-col overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="table-fixed table w-full">
            <thead className="text-xs bg-grey-light uppercase border-b border-slate-200">
              <tr>
                {columns.map((column, index) => (
                  <th
                    className={classNames('text-left py-5 px-3 text-slate-600 text-xs', column.className)}
                    key={column.key}
                  >
                    <div className=" text-grey-dark text-sm font-raleway font-bold">
                      {column.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full bg-grey-light">
              {datas?.map((data, dataIndex) => (
                <tr className={classNames(
                  "border-slate-200",
                  datas[dataIndex + 1] ? 'border-b' : ''
                )} key={data.key || dataIndex}>
                  {Object.keys(data).map((key, index) => {
                    return key !== "key" ? (
                      <td
                        className={classNames("py-5 px-3 font-raleway text-grey-darker font-semibold")}
                        key={index + '3"ç'}
                      >
                        {columns.find((c) => c.dataIndex === key)?.render
                          ? columns
                              .find((c) => c.dataIndex === key)
                              ?.render(data[key])
                          : data[key]}
                      </td>
                    ) : null;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {datas?.length === 0 && (
            <div className="w-full my-5">
              <div className="text-center italic text-grey">
                0 cours enregistré
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
