import React from "react";
import { Header } from "../components";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-black/20 rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent
        style={{ borderRadius: "20px", overflow: "hidden" }}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
