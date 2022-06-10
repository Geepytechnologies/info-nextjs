import React from 'react'

export const Table = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='w-[90vw] border border-[rgba(255,255,255,0.3)] rounded-lg'>
        <table className='table w-[90vw] bg-[yellow] '>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='bg-[red]'>
                        <div className='flex flex-row'>
                            <p className='text-white'>hello</p>
                            <p className='text-white'>hi</p>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}
