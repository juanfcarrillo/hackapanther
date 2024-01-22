'use client'

import { Editor } from "@monaco-editor/react";
import oneDarkProTheme from "../../../assets/oneDarkPro.json";
import OutputCode from "./OutputCode";

const defaultValue = `
function twoSum(nums, target) {
    return []
}
`

export default function CodeSection(): JSX.Element {
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
                theme="one-dark"
            />
            <OutputCode />
        </section>
    )
}