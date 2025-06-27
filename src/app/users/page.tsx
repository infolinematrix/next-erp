import { Heading } from '@/components/ui/heading'
import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
  return <>
    <div className='flex items-start justify-between'>
      <Heading title={`Users`} description='Manage users' />
      <div className='flex items-center gap-2'>
        {/* Add any additional actions or buttons here */}  
        asd
        </div>
    </div>

    <div className='mt-4'>
      <p className='text-muted-foreground'>This is the user management page.</p>
    </div>
  </>
}

export default Page