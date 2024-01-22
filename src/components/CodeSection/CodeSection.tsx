'use client'

import { Editor } from "@monaco-editor/react";
import oneDarkProTheme from "../../assets/oneDarkPro.json";
import OutputCode from "./OutputCode";
import { useState } from "react";

const defaultValue = `
function twoSum(nums, target) {
    return []
}
`

export default function CodeSection(): JSX.Element {

    const [editotValue, setEditorValue] = useState(defaultValue)

    return (
        <section className="flex-1 relative overflow-hidden">
            <Editor
                height="100%"
                defaultLanguage="javascript" 
                defaultValue={defaultValue}
                onMount={(editor, monaco) => {            
                    monaco.editor.defineTheme('one-dark', oneDarkProTheme as any)
                    monaco.editor.setTheme('one-dark')
                }}
                onChange={(value, event) => {
                    setEditorValue(value || "")
                }}
                theme="one-dark"
            />
            <OutputCode code={editotValue} />
        </section>
    )
}