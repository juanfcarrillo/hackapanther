import { Button, ButtonGroup, Chip, Spinner } from "@nextui-org/react";
import { useReducer } from "react";
import SendIcon from "../SendIcon";
import useUploadCode, { TestResult } from "@/hooks/useUploadCode";
import ResultElement from "./ResultElement";
import ErrorCode from "./ErrorCode";

interface TabsState {
    activeTab: 'tests' | 'send' | undefined
}

const types = {
    SET_ACTIVE_TAB: 'SET_ACTIVE_TAB'
}

function tabsReducer(state: TabsState, action: { type: string, payload: TabsState['activeTab'] }) {
    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            return {
                ...state,
                activeTab: action.payload
            }
        default:
            return state
    }
}

interface OutputCodeProps {
    code: string
}

export default function OutputCode({ code }: OutputCodeProps): JSX.Element {
    const [state, dispatch] = useReducer<typeof tabsReducer>(tabsReducer, {
        activeTab: undefined
    })

    const {
        isLoading,
        uploadCode,
        response,
        error
    } = useUploadCode()

    console.log(response)

    function setActiveTab(tab: TabsState['activeTab']) {
        dispatch({
            type: types.SET_ACTIVE_TAB,
            payload: state.activeTab === tab && state.activeTab !== 'send' ? undefined : tab
        })
    }

    function handleSend() {
        uploadCode(code)
        setActiveTab('send')
    }

    console.log({error})

    return (
        <section className={`t-2 w-11/12 px-2 absolute bottom-4 left-4 ${state.activeTab ? "animate-showup" : "animate-showdown"}`}>
            <ButtonGroup>
                <Button
                    onClick={() => setActiveTab('tests')}
                    className="min-w-36"
                >Tests</Button>
                <Button
                    onClick={handleSend}
                    color="success"
                    className="min-w-36"
                >Send <SendIcon /></Button>
            </ButtonGroup>
            <div className={`flex gap-y-3 flex-col max-h-72 overflow-auto items-center bg-slate-900 min-h-36 p-8 w-11/12 mt-2 rounded-lg ${!state.activeTab ? "hidden" : "block"}`}>
                {
                    isLoading ? (
                        <Spinner color="success"/>
                    ) :
                    error ? (
                        <ErrorCode />
                    ) :
                    response?.map((result: any, index) => (
                        <ResultElement key={index} number={index} status={result.state} testDescription={result.title} />
                    ))
                }
            </div>
        </section>
    )
}