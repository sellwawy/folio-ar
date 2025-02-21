'use server'

export async function submetContactForm(previousState: string, formData: FormData) {
   const email = formData.get('email')
   const message = formData.get('message')
   console.log(email, message)

   return { email, message }
}
