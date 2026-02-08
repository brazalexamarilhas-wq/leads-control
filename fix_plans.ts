
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://sua-url.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sua-chave';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const plansToCreate = [
    { name: 'Mensal', price: 34.90, interval: 'monthly', features: ['Acesso completo', 'Suporte básico'] },
    { name: 'Trimestral', price: 89.90, interval: 'monthly', features: ['Acesso completo', 'Desconto trimestral'] },
    { name: 'Semestral', price: 164.90, interval: 'monthly', features: ['Acesso completo', 'Desconto semestral'] },
    { name: 'Anual', price: 299.90, interval: 'yearly', features: ['Acesso completo', 'Maior desconto', 'Prioridade no suporte'] },
];

async function updatePlans() {
    console.log('Iniciando atualização dos planos...');

    // 1. Desativar planos antigos (opcional, ou podemos tentar atualizar os existentes pelo nome ou preço aproximado)
    // Vamos simplificar: Criar os novos se não existirem, ou atualizar se encontrar nome parecido.

    // Mas como o usuário não tem acesso ao banco, vamos TENTAR LIMPAR e recriar ou Apenas Inserir.
    // Melhor abordagem: Inserir novos e deixar o usuário deletar os velhos na UI, ou tentar renomear "Básico" para "Mensal".

    // Vamos tentar mapear:
    // Básico -> Mensal
    // Profissional -> Semestral?
    // Enterprise -> Anual?

    // Vou apenas criar os novos para garantir que funciona.

    for (const plan of plansToCreate) {
        const { data: existing } = await supabase
            .from('plans')
            .select('id')
            .eq('name', plan.name)
            .single();

        if (existing) {
            console.log(`Plano ${plan.name} já existe. Atualizando preço...`);
            await supabase.from('plans').update({ price: plan.price }).eq('id', existing.id);
        } else {
            console.log(`Criando plano ${plan.name}...`);
            await supabase.from('plans').insert({
                ...plan,
                is_active: true
            });
        }
    }

    console.log('Planos configurados com sucesso!');
}

updatePlans();
