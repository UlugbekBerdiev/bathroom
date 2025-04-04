import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState, useEffect } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  address: string
  description: string
}

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  // Debug environment variables
  useEffect(() => {
    console.log('Environment Variables:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    })
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = 'service_qt623bq'
      const templateId = 'template_c92wmui'
      const publicKey = '7fqYoMd21ZB8JFnHh'

      // Initialize EmailJS with the public key
      emailjs.init(publicKey)

      console.log('Sending email with values:', {
        serviceId,
        templateId,
        publicKey,
        data
      })

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'ber.ulugbek@gmail.com',
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          from_address: data.address,
          message: data.description,
        }
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote" className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Request a Free Quote
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
              with a free, no-obligation quote for your bathroom remodel.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                {...register('address', { required: 'Address is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Project Description
              </label>
              <textarea
                id="description"
                {...register('description', { required: 'Description is required' })}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">
                Thank you! We'll get back to you shortly.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
} 