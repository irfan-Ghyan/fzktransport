
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wkawlojezcodeltuvcbf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYXdsb2plemNvZGVsdHV2Y2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MzI1NjksImV4cCI6MjAzODUwODU2OX0.MUZ3SREUYDaKTuyM3AJtkT43omL60PpsAdHIasOhX7o';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
