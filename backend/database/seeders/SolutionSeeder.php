<?php

namespace Database\Seeders;

use App\Models\Solution;
use Illuminate\Database\Seeder;

class SolutionSeeder extends Seeder
{
    public function run(): void
    {
        $solutions = [
            [
                'title' => 'Site vitrine professionnel',
                'category' => 'Web',
                'excerpt' => 'Un site vitrine moderne, rapide et optimisé SEO pour présenter votre entreprise.',
                'description' => "Nous concevons un site vitrine sur mesure, adapté à votre identité visuelle, avec un contenu optimisé pour le référencement naturel et une interface pensée pour convertir vos visiteurs en clients.",
                'price_cents' => 149000,
                'features' => ['Design sur mesure', 'SEO', 'Formulaire de contact', 'Responsive mobile'],
                'sort_order' => 1,
            ],
            [
                'title' => 'Boutique en ligne',
                'category' => 'E-commerce',
                'excerpt' => 'Une boutique en ligne complète pour vendre vos produits 24h/24.',
                'description' => "Développement d'une boutique en ligne complète avec catalogue, panier, paiement sécurisé et gestion des commandes, pour vendre vos produits facilement et sans intermédiaire.",
                'price_cents' => 399000,
                'features' => ['Catalogue produits', 'Paiement sécurisé', 'Gestion de stock', 'Suivi de commandes'],
                'sort_order' => 2,
            ],
            [
                'title' => 'Application métier sur mesure',
                'category' => 'Logiciel',
                'excerpt' => 'Une application web sur mesure pour optimiser vos processus internes.',
                'description' => "Nous digitalisons vos processus métier grâce à une application web sur mesure : gestion des clients, planning, facturation, reporting. Simple à utiliser et adaptée à vos besoins réels.",
                'price_cents' => 599000,
                'features' => ['Workflow personnalisés', 'Tableaux de bord', 'Gestion des droits', 'Export de données'],
                'sort_order' => 3,
            ],
            [
                'title' => 'Automatisation des tâches',
                'category' => 'Productivité',
                'excerpt' => 'Automatisez vos tâches répétitives et gagnez un temps précieux.',
                'description' => "Nous analysons vos tâches répétitives et mettons en place des automatisations pour réduire les erreurs, accélérer vos opérations et libérer du temps pour l'essentiel.",
                'price_cents' => 249000,
                'features' => ['Analyse des processus', 'Intégrations', 'Alertes automatiques', 'Reporting'],
                'sort_order' => 4,
            ],
        ];

        foreach ($solutions as $solution) {
            Solution::updateOrCreate(
                ['slug' => str($solution['title'])->slug()],
                $solution,
            );
        }
    }
}
