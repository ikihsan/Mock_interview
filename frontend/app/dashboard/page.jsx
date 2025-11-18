import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-5'>
        <div className='p-4 border rounded-lg bg-white shadow'>
          <h3 className='text-lg font-semibold'>Total Interviews</h3>
          <p className='text-2xl font-bold text-primary'>5</p>
        </div>
        <div className='p-4 border rounded-lg bg-white shadow'>
          <h3 className='text-lg font-semibold'>Completed</h3>
          <p className='text-2xl font-bold text-green-600'>3</p>
        </div>
        <div className='p-4 border rounded-lg bg-white shadow'>
          <h3 className='text-lg font-semibold'>In Progress</h3>
          <p className='text-2xl font-bold text-yellow-600'>2</p>
        </div>
        <div className='p-4 border rounded-lg bg-white shadow'>
          <h3 className='text-lg font-semibold'>Average Score</h3>
          <p className='text-2xl font-bold text-blue-600'>85%</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
            <AddNewInterview/>
      </div>
      <InterviewList/>
    </div>
    
  )
}

export default Dashboard