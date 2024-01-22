import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface TestResult {
    title: string;
    state: string;
}

export interface TestError {
    generatedMessage: boolean;
    code: string;
    actual: string;
    expected: string;
    operator: string;
}

type EndpointResult = TestError | TestResult;

async function uploadCode(code: string): Promise<EndpointResult[]> {
    const endpoint = process.env.NEXT_PUBLIC_API_URL || "";

    console.log({ endpoint })

    const response = await axios.post<EndpointResult[]>(endpoint, {
        code
    })

    return response.data;
}

export default function useUploadCode() {
    const {
        mutate,
        isError,
        isSuccess,
        data,
        error,
        status
    } = useMutation({
        mutationKey: ['todos'],
        mutationFn: uploadCode
    })

    return {
        response: data,
        isError,
        isSuccess,
        error,
        isLoading: status === 'pending',
        uploadCode: mutate
    }
}