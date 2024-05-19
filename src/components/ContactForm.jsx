
  'use client'

import { Container } from '@/components/Container'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button';
import { useForm } from 'react-hook-form';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useState } from 'react';



export default function ContactForm() {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const {  register, handleSubmit, formState : { errors } } = useForm();



    const onSubmit = async (data) => {
      try {
        const response = await fetch("https://formspree.io/f/xleqvqvd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          // Form submitted successfully
          setFormSubmitted(true)
          
        } else {

          // Handle error (e.g., display an error message)
          console.error("Error submitting form:", response.statusText);

        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };



  return (

  <>
 { 
    formSubmitted ? (
      <SimpleLayout
                    title="Thanks for reaching out to me."
                    intro="I’ll respond as quick as possible."
                    className='py-36'
                    />
    ) : (
 
    <Container>
      <div className="bg-slate-50 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50"> What are you waiting for ! drop a text and let's work togother. </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Feel free to reach out to me, and let's make your ideas reality.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    Meknes,
                    <br />
                    Morocco
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900 dark:hover:text-gray-100" href="mailto:hello@example.com">
                      belkasmizakariae@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}  method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("first-name")}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("last-name", {
                        required: true,
                    })}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                 { errors.email && errors.email.type === "required" && (
                    <p className="text-red-400 text-sm ">Name is required.</p>
                  )}

                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                  })}
                 
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && errors.email.type === "required" && (
                    <p className="text-red-400 text-sm ">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                        <p className="text-red-400 text-sm">Email is not valid.</p>
                    )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                    {...register("message", {
                        required: true,
                    })}
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                     {errors.email && errors.email.type === "required" && (
                    <p className="text-red-400 text-sm ">Message is required.</p>
                  )}
                  </div>
                 
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  varient='primary'
                  type="submit"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
    
  )}
  </>
   
  );
}
