import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Chip } from "@nextui-org/react";

interface ResultElementProps {
    number: number
    status: 'passed' | 'failed'
    testDescription: string
}

export default function ResultElement({number, status, testDescription}: ResultElementProps): JSX.Element {
    return (
        <Card 
        classNames={{
            body: "w-full"
        }}
        className="w-11/12 p-5 min-h-28" >
            <CardHeader className="flex justify-between">
                <h4>
                    {number}
                </h4>
                <Chip color={
                    status === 'passed' ? 'success' :
                    'failed' && 'danger'
                }>
                    {status}
                </Chip>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {testDescription}
                </p>
            </CardBody>
        </Card >
    )
}