-- Add email and phone columns to contact_submissions
ALTER TABLE public.contact_submissions
ADD COLUMN email TEXT,
ADD COLUMN phone TEXT;

-- Copy existing contact data to email as fallback
UPDATE public.contact_submissions SET email = contact WHERE contact IS NOT NULL;

-- Make email required for new submissions
ALTER TABLE public.contact_submissions ALTER COLUMN email SET NOT NULL;

-- Drop the old contact column
ALTER TABLE public.contact_submissions DROP COLUMN contact;