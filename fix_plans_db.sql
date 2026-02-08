-- Adiciona a coluna is_active se ela não existir
alter table public.plans 
add column if not exists is_active boolean default true;

-- Garante que todos os planos existentes estejam ativos
update public.plans 
set is_active = true 
where is_active is null;

-- Recarrega o cache do schema para garantir que tudo funcione
NOTIFY pgrst, 'reload config';
