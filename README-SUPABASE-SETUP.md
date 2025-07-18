# Supabase Setup Instructions

## Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project name: "siddhagiri-institute"
6. Enter a strong database password
7. Choose your region (closest to your users)
8. Click "Create new project"

## Step 2: Get Your Project Credentials
1. Once your project is created, go to Settings > API
2. Copy your Project URL (looks like: https://your-project-id.supabase.co)
3. Copy your anon/public key (starts with "eyJ...")

## Step 3: Update Environment Variables
1. Create a `.env` file in your project root
2. Add the following content with your actual Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
   ```
3. Replace the placeholder values with your actual Supabase project URL and anon key

## Step 4: Create Database Tables
1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-setup.sql`
3. Paste it into the SQL Editor
4. Click "Run" to execute the SQL

## Step 5: Verify Setup
1. Go to Table Editor in your Supabase dashboard
2. You should see two tables: `admission_forms` and `contact_forms`
3. Both tables should have RLS (Row Level Security) enabled
4. The policies should allow public insert and select operations

## Step 6: Test the Connection
1. Start your development server: `npm run dev`
2. Go to the admin dashboard: `http://localhost:5173/#admin`
3. Use password: `admin123`
4. You should see the dashboard with empty tables

## Database Schema

### admission_forms table:
- id (UUID, Primary Key)
- full_name (Text)
- email (Text)
- phone (Text)
- date_of_birth (Date)
- gender (Text)
- course (Text)
- tenth_percentage (Decimal)
- twelfth_percentage (Decimal)
- neet_score (Integer, Optional)
- address (Text)
- emergency_contact_name (Text)
- emergency_contact_phone (Text)
- motivation (Text)
- created_at (Timestamp)

### contact_forms table:
- id (UUID, Primary Key)
- name (Text)
- email (Text)
- phone (Text)
- department (Text, Optional)
- message (Text)
- created_at (Timestamp)

## Security Notes
- RLS is enabled on both tables
- Public policies allow form submissions
- In production, consider adding rate limiting
- Consider adding email verification for form submissions

## Admin Access
- Admin dashboard URL: `/admin` or `#admin`
- Default password: `admin123`
- Change this password in production!

## Troubleshooting
1. **Connection Error**: Check your URL and API key in the `.env` file
2. **Environment Variables Not Working**: Make sure you've created a `.env` file in the project root and restarted the development server
3. **RLS Error**: Ensure policies are created correctly
4. **Insert Error**: Check table structure and data types
5. **CORS Error**: Ensure your domain is added to Supabase settings
6. **Form Data Not Saving**: Check browser console for errors and verify Supabase connection