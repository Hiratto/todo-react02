import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/* インプットエリア */}
      <div>
        <input placeholder="TODOを入力" type="text" name="" id="" />
        <button>追加</button>
      </div>

      {/* 未完了リスト */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/* 完了リスト */}
      <div>
        <p>完了したTODO</p>
        <ul>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
          <div>
            <li>ええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
