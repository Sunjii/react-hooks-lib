import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import { useClick } from "./hooks/useClick";
import { useCopy } from "./hooks/useCopy";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useBeforeLeave } from "./hooks/useBeforeLeave";
import { useFadeIn } from "./hooks/useFadeIn";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { useNotification } from "./hooks/useNotification";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

function App() {
  const name = useInput("Mr. ");
  const { currentItem, changeItem } = useTabs(0, content);
  const sayHello = () => {
    alert("Hello");
  };
  const header2 = useClick(sayHello);

  const [isCopy, onCopy] = useCopy();
  const handleCopy = (text: string) => {
    onCopy(text);
  };

  const deleteWord = () => {
    alert("delete");
  };
  const cancleDelte = () => {
    alert("cancled");
  };
  const confirmDelete = useConfirm("Are you really?", deleteWord, cancleDelte);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);

  const fadeIn = useFadeIn(1, 1);
  const fadeIn2 = useFadeIn(5, 2);

  const handleNetwork = (online: any) => {
    console.log(online ? "We are online" : "We are offline");
  };
  const onLine = useNetwork(handleNetwork);

  const { y } = useScroll();

  const triggerNoti = useNotification("Can I sit?", { body: "I love kimchi" });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{onLine ? "Online" : "Offline"}</p>
        <button onClick={triggerNoti}>Noti</button>

        <h1 {...fadeIn}>Test</h1>
        <p {...fadeIn2}>blabla lorem ipsum alalal</p>
        <input placeholder="name" value={name.value} onChange={name.onChange} />

        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
          Hi
        </h1>

        <h2 ref={header2}>Click me</h2>

        {content.map((sec, index) => (
          <button onClick={() => changeItem(index)}>{sec.tab}</button>
        ))}
        <div>{currentItem.content}</div>

        <button onClick={() => handleCopy("복사된 텍스트")}>copy</button>
        {isCopy ? <p>copied!</p> : ""}

        <button onClick={confirmDelete}>Delete Word</button>

        <button onClick={enablePrevent}>P</button>
        <button onClick={disablePrevent}>UnP</button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
