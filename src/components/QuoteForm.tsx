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
    <section id="quote" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Request a Free Quote
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
              with a free, no-obligation quote for your bathroom renovation, remodel, or makeover. 
              We specialize in complete bathroom transformations, shower installations, 
              bathtub replacements, vanity upgrades, tile work, plumbing updates, 
              and custom bathroom designs in Washington DC, Maryland, and Northern Virginia.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-white p-6 md:p-8 rounded-lg shadow-md border-2 border-black"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                {...register('name', { })}
                className="w-full px-4 py-3 rounded-lg border-2 border-black focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
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
                placeholder="Your Email"
                {...register('email', { })}
                className="w-full px-4 py-3 rounded-lg border-2 border-black focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  {...register('phone', { })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
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
                  {...register('address', { })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Project Description
              </label>
              <textarea
                id="description"
                placeholder="Tell us about your project"
                {...register('description', { })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-black focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                required
              ></textarea>
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
              <div className="bg-green-50 border border-green-200 text-green-700 px-8 py-6 rounded-lg text-center max-w-2xl mx-auto my-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg md:text-xl">
                  Your quote request has been submitted successfully. We'll get back to you shortly.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
} 