"use client"

import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';
import { useAuthStore } from '@/store/useAuthStore';
import { useMockInterviewStore } from '@/store/useMockInterviewStore';
import { LoaderCircle } from 'lucide-react';

function InterviewList() {
    const { authUser } = useAuthStore();
    const { fetchInterviews, interviews, isLoading } = useMockInterviewStore();

    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetchInterviews(authUser.email);
        }
    }, [authUser]);

    useEffect(() => {
        setInterviewList(interviews);
    }, [interviews]);

    if (isLoading) {
        return (
            <div className='mt-10'>
                <h2 className='font-medium text-xl'><strong>Previous Mock Interviews</strong></h2>
                <div className='flex justify-center items-center py-10'>
                    <LoaderCircle className='animate-spin w-8 h-8 text-primary' />
                    <span className='ml-2'>Loading interviews...</span>
                </div>
            </div>
        );
    }

    return (
        <div className='mt-10'>
            <h2 className='font-medium text-xl'><strong>Previous Mock Interviews</strong></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {interviewList && interviewList.length > 0 ? (
                    interviewList.map((interview, index) => (
                        <InterviewItemCard
                            interviewItemData={interview}
                            key={interview._id || index}
                        />
                    ))
                ) : (
                    <div className='col-span-full text-center py-10 text-gray-500'>
                        No interviews found. Create your first mock interview!
                    </div>
                )}
            </div>
        </div>
    )
}

export default InterviewList;
