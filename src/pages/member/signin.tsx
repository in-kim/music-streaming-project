import React, { useState } from "react";
import Link from "next/link";
import {ViewPwd} from "./member.style";

export default function signin(): JSX.Element {

    const toggleShowPswd = ()=> {
        setShowPswd(!showPswd)
            console.log(showPswd)
    }

    const [showPswd, setShowPswd] = useState<boolean>(false);
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const handleChangeId = ({ target: { value } }) => setId(value);
    const handleChangePwd = ({ target: { value } }) => setPassword(value);
    return (
        <div>
            <div className="wrapper">
                <form>
                    <input className="idpw" name="id" placeholder="아이디(이메일)"
                       type="text"
                       id="roll"
                       required
                       minlength="10"
                       maxlength="20"
                       value={id}
                       onChange={handleChangeId}
                    />
                    <div className="idpw-wrpper">
                        <input className="idpw" name="password" placeholder="비밀번호"
                               type={showPswd ? "text" : "password"}
                               value={password}
                               onChange={handleChangePwd}
                        />
                            {showPswd ? (
                                <div className="closeEye" onClick={toggleShowPswd}>오픈</div>
                            ) : (
                                <div className="openEye" onClick={toggleShowPswd}>클로즈</div>
                            )}
                    </div>
                    <label>
                        <input
                            type="checkbox"
                            className="checkbox"
                        />
                        <span>아이디 저장</span>
                    </label>
                    <button className={id && password ? "login" : "submit-button"} type="submit">로그인</button>
                </form>
                <div className="sub-container">
                    <ul>
                        <li>
                            <Link href="/member/find/id">아이디 찾기</Link>
                        </li>
                        <li>비밀번호 찾기</li>
                    </ul>
                    <div>
                        <Link href="/member/signup">회원가입</Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                  border: 1px solid #d9d9d9;
                  width: 682px;
                  padding: 50px 120px;
                }
                .idpw-wrpper {
                  width: 100%;
                  position: relative;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                .idpw {
                  width: 100%;
                  border: 0;
                  border-bottom: 1px solid #ebebeb;
                  height: 58px;
                  margin: 10px 0 20px 0;
                  font-size: 16px;
                }
                .checkbox {
                  margin-right: 10px;
                }
                label {
                  margin-bottom: 20px;
                }
                .submit-button {
                  height: 62px;
                  line-height: 62px;
                  font-size: 18px;
                  background-color: #d9d9ff;
                  border: none;
                  color: #fff;
                  font-weight: 600;
                }
                .login {
                  height: 62px;
                  line-height: 62px;
                  font-size: 18px;
                  text-align: center;
                  background-color: #3f3fff;
                  border: none;
                  color: #fff;
                  font-weight: 600;
                  cursor:pointer;
                }
                .sub-container {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                }
                ul {
                  display: flex;
                  margin: 0;
                  padding: 0;
                }
                li:first-child::after {
                  color: #c4c4c4;
                  content: "|";
                  font-size: 1px;
                  padding: 0 10px;
                }
                .openEye {
                  position: absolute;
                  bottom: 40%;
                  right: 0;
                  cursor: pointer;
                  position: absolute;
                  width: 1.8125rem;
                  height: 1.8125rem;
                  text-indent: -9999px;
                  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAB0CAYAAADU6SE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVFRUNDMzBBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVFRUNDMzFBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QjRGNzhGNUE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QjRGNzhGNkE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrpR5c4AAAaLSURBVHja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");
                  background-size: 100%;
                }
                .closeEye {
                  position: absolute;
                  bottom: 40%;
                  right: 0;
                  cursor: pointer;
                  width: 1.8125rem;
                  height: 1.8125rem;
                  text-indent: -9999px;
                  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAB0CAYAAADU6SE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVFRUNDMzBBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVFRUNDMzFBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QjRGNzhGNUE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QjRGNzhGNkE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrpR5c4AAAaLSURBVHja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");
                  background-size: 100%;
                  background-position: 0 -94%;
                }
            `}
            </style>
        </div>
    );
}
