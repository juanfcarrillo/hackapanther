'use client'

import { Tab, Tabs } from '@nextui-org/react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

const markdown = `

# Two Sum Problem Solution in JavaScript

## Problem Description
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## Solution
The \`twoSum\` function in \`two_sum_solution.js\` solves this problem.

### Function Usage
1. Include the script in your JavaScript environment.
2. Call the function \`twoSum(nums, target)\` where \`nums\` is an array of integers, and \`target\` is the integer target sum.
3. The function returns an array of two indices.

### Example
\`\`\`js
console.log(twoSum([2, 7, 11, 15], 9)); // Outputs: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Outputs: [1, 2]
console.log(twoSum([3, 3], 6)); // Outputs: [0, 1]
\`\`\`
`

const markdownSolution = `
# Two Sum Problem Solution in JavaScript
\`\`\`js
function twoSum(nums, target) {
    const indices = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices.has(complement)) {
            return [indices.get(complement), i];
        }
        indices.set(nums[i], i);
    }
}

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
\`\`\`
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
                        remarkPlugins={[remarkGfm, remarkToc]}
                        rehypePlugins={[rehypeSlug, rehypeHighlight]}
                        className="markdown-body p-0 py-8 px-4"
                    >
                        {markdown}
                    </Markdown>
                </Tab>
                <Tab key='solution' title="Solution" >
                    <Markdown
                        remarkPlugins={[remarkGfm, remarkToc]}
                        rehypePlugins={[rehypeSlug, rehypeHighlight]}
                        className="markdown-body p-0 py-8 px-4"
                    >
                        {markdownSolution}
                    </Markdown>
                </Tab>
            </Tabs>
        </section>
    )
}