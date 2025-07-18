-- Create admission_forms table
CREATE TABLE IF NOT EXISTS admission_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  course TEXT NOT NULL,
  tenth_percentage DECIMAL(5,2) NOT NULL CHECK (tenth_percentage >= 0 AND tenth_percentage <= 100),
  twelfth_percentage DECIMAL(5,2) NOT NULL CHECK (twelfth_percentage >= 0 AND twelfth_percentage <= 100),
  neet_score INTEGER,
  address TEXT NOT NULL,
  emergency_contact_name TEXT NOT NULL,
  emergency_contact_phone TEXT NOT NULL,
  motivation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  department TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE admission_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public form)
-- Note: In production, you might want more restrictive policies

-- Policy for admission_forms
CREATE POLICY "Allow public insert on admission_forms" ON admission_forms
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public select on admission_forms" ON admission_forms
  FOR SELECT TO anon USING (true);

-- Policy for contact_forms
CREATE POLICY "Allow public insert on contact_forms" ON contact_forms
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public select on contact_forms" ON contact_forms
  FOR SELECT TO anon USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_admission_forms_created_at ON admission_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admission_forms_course ON admission_forms(course);
CREATE INDEX IF NOT EXISTS idx_admission_forms_email ON admission_forms(email);

CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_forms_department ON contact_forms(department);
CREATE INDEX IF NOT EXISTS idx_contact_forms_email ON contact_forms(email);

-- Add some sample data for testing (optional)
-- INSERT INTO admission_forms (
--   full_name, email, phone, date_of_birth, gender, course,
--   tenth_percentage, twelfth_percentage, neet_score, address,
--   emergency_contact_name, emergency_contact_phone, motivation
-- ) VALUES (
--   'John Doe', 'john@example.com', '9876543210', '2000-01-15', 'Male', 'B.Sc Nursing',
--   85.5, 78.2, 450, '123 Main St, City, State', 'Jane Doe', '9876543211',
--   'I want to serve humanity through nursing profession.'
-- );

-- INSERT INTO contact_forms (
--   name, email, phone, department, message
-- ) VALUES (
--   'Alice Smith', 'alice@example.com', '9876543212', 'General Medicine',
--   'I would like to inquire about your nursing programs.'
-- );