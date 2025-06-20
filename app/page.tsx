import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main className='mb-6'>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='123'
        name="Neura the Brainy Explorer"
        topic="Neural Network of the brain"
        subject="Science"
        duration={45}
        color="#90ee90"
        />
        <CompanionCard 
        id='456'
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={30}
        color="#e5d0ff"
        />
        <CompanionCard 
        id='789'
        name="Verba the Vocabulary Builder"
        topic="language"
        subject="English Literature"
        duration={30}
        color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
        title='Recently completed sessions'
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page