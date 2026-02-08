-- Cria a tabela de planos se ela não existir
create table if not exists public.plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  name text not null,
  price numeric not null,
  interval text not null check (interval in ('monthly', 'yearly')), 
  features jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativa RLS (Row Level Security)
alter table public.plans enable row level security;

-- Políticas de segurança (quem pode ver/criar/editar)
create policy "Users can view their own plans"
on public.plans for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own plans"
on public.plans for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own plans"
on public.plans for update
to authenticated
using (auth.uid() = user_id);

create policy "Users can delete their own plans"
on public.plans for delete
to authenticated
using (auth.uid() = user_id);

-- Recarrega o cache do schema (importante para o PostgREST reconhecer a nova tabela)
NOTIFY pgrst, 'reload config';
