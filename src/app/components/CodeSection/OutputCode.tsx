import { Button, ButtonGroup } from "@nextui-org/react";
import { useReducer } from "react";

interface TabsState {
    activeTab: 'tests' | 'results' | undefined
}

const types = {
    SET_ACTIVE_TAB: 'SET_ACTIVE_TAB'
}

function tabsReducer (state: TabsState, action: { type: string, payload: TabsState['activeTab']}) {
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

export default function OutputCode(): JSX.Element {
    const [state, dispatch] = useReducer<typeof tabsReducer>(tabsReducer, {
        activeTab: undefined
    })

    function setActiveTab (tab: TabsState['activeTab']) {
        dispatch({
            type: types.SET_ACTIVE_TAB,
            payload: state.activeTab === tab ? undefined : tab
        })
    }

    return (
        <section className={`t-2 px-2 absolute bottom-4 left-4 ${state.activeTab ? "animate-showup" : "animate-showdown"}`}>
            <ButtonGroup>
                <Button 
                    onClick={() => setActiveTab('tests')} 
                    className="min-w-36"
                >Tests</Button>
                <Button
                    onClick={() => setActiveTab('results')}
                    className="min-w-36"
                >Results</Button>
            </ButtonGroup>
            <div className={`bg-slate-900 p-8 w-11/12 mt-2 rounded-lg ${!state.activeTab ? "hidden" : "block"}`}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio consectetur perspiciatis beatae alias quam impedit laboriosam minima atque libero, natus ullam, maxime quos est quod cum molestiae rem in?
                </p>
            </div>
        </section>
    )
}