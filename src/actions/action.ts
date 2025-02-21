'use server'
export async function submetContactForm(
   previousState: { email: FormDataEntryValue | null; message: FormDataEntryValue | null },
   formData: FormData,
) {
   const email = formData.get('email')
   const message = formData.get('message')
   return { email, message }
}
