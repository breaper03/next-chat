import LoginForm from '@/components/LoginForm'
import { Input } from '@nextui-org/react'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="w-full h-full rounded-lg p-5 flex items-center justify-center">
        {/* Box Login */}
        <div className="w-1/3">
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default Login