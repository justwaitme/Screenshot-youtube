import React, {useState} from "react"
//import ReactMde from "react-mde"
import MDEditor from '@uiw/react-md-editor';
import Showdown from "showdown"
import '../index.css'

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="pane editor">
            <MDEditor
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
                data-color-mode="light"
            />
        </section>
    )
}
