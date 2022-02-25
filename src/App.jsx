import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/* インプットエリア */}
      <div className="input-area">
        <input placeholder="TODOを入力" type="text" name="" id="" />
        <button>追加</button>
      </div>

      {/* 未完了リスト */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/* 完了リスト */}
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>ええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
