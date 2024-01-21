'use client'

import { Tab, Tabs } from '@nextui-org/react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const markdown = `
# Python Coding Exercise: Two Sum Problem

## Problem Description
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## Examples

1. Input: \`nums = [2,7,11,15], target = 9\`
   Output: \`[0,1]\`
   Explanation: Because \`nums[0] + nums[1] == 9\`, we return \`[0, 1]\`.

2. Input: \`nums = [3,2,4], target = 6\`
   Output: \`[1,2]\`

3. Input: \`nums = [3,3], target = 6\`
   Output: \`[0,1]\`

## Constraints

- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.

## Follow-up
Can you come up with an algorithm that is less than \`O(n^2)\` time complexity?

`

export default function ExerciseSection(): JSX.Element {
    return (
        <section className='flex-1 overflow-y-auto bg-[#0d1117]'>
            <Tabs
                classNames={{
                    base: 'sticky top-0 px-4 pt-4',
                    panel: 'p-0 w-full h-full',
                }}
            >
                <Tab key='exercise' title="Exercise">
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        className="markdown-body p-0 py-8 px-4"
                    >
                        {markdown}
                    </Markdown>
                </Tab>
                <Tab key='solution' title="Solution" />
            </Tabs>
        </section>
    )
}