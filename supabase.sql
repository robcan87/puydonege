-- Puydonege Booking Calendar: run this once in Supabase (SQL Editor -> New query -> Run)

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  booked_by text,
  start_date date not null,
  end_date date not null,
  note text default '',
  status text not null default 'pending' check (status in ('pending','approved','declined')),
  created_at timestamptz default now()
);

alter table bookings enable row level security;

-- Family-level access: anyone with the app can read and write.
create policy "family select" on bookings for select using (true);
create policy "family insert" on bookings for insert with check (true);
create policy "family update" on bookings for update using (true);
create policy "family delete" on bookings for delete using (true);

-- Live updates in the app
alter publication supabase_realtime add table bookings;
