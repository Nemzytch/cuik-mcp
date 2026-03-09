# Cuik MCP

Connecte Claude à tes données SEO. Analyse ton site, tes mots-clés, ton trafic — et obtiens des recommandations actionnables directement dans la conversation.

## Installation

### 1. Récupère ta clé API

Va sur [cuik.io/settings](https://cuik.io/settings) et copie ta clé API (elle commence par `sk_`).

### 2. Ajoute à Claude Desktop

Ouvre les paramètres de Claude Desktop → **Developer > Edit Config**, et ajoute :

```json
{
  "mcpServers": {
    "cuik": {
      "command": "npx",
      "args": ["-y", "github:Nemzytch/cuik-mcp"],
      "env": {
        "CUIK_API_KEY": "sk_ta_cle_ici"
      }
    }
  }
}
```

### 3. Ajoute à Claude Code (CLI)

```bash
claude mcp add cuik -- npx -y github:Nemzytch/cuik-mcp
```

Puis ajoute ta clé API dans ton environnement :

```bash
export CUIK_API_KEY="sk_ta_cle_ici"
```

### 4. Redémarre

Redémarre Claude Desktop ou Claude Code pour charger le MCP.

---

## Ce que tu peux faire

### Analyser tes mots-clés Google Search Console

Accède à toutes tes données Search Console directement dans Claude. Tu peux voir tes meilleurs mots-clés, suivre tes positions, et trouver des opportunités de trafic.

**Exemples de prompts :**
- *"Montre-moi mes 20 meilleurs mots-clés sur cuik.io ce mois-ci"*
- *"Quels mots-clés sont entre la position 5 et 15 avec le plus d'impressions ?"*
- *"Compare mon trafic cette semaine vs la semaine dernière, quels mots-clés j'ai perdu ?"*
- *"Montre l'évolution de mes clics sur les 30 derniers jours"*
- *"Quels sont mes mots-clés en position 1 à 3 ?"*

### Suivre tes pages et leur performance

Analyse les performances de tes pages : clics, impressions, CTR, positions — et croise avec tes données de crawl.

**Exemples de prompts :**
- *"Quelles sont mes 10 pages avec le plus de clics ?"*
- *"Quelles pages ont perdu du trafic entre ce mois et le mois dernier ?"*
- *"Montre-moi les pages qui ont beaucoup d'impressions mais un CTR faible"*

### Crawler ton site

Lance un crawl SEO complet de ton site et analyse les résultats : erreurs, titres manquants, redirections, contenu dupliqué, et plus.

**Exemples de prompts :**
- *"Crawle https://monsite.com"*
- *"Montre-moi toutes les pages avec un status 404 ou 301"*
- *"Quelles pages n'ont pas de H1 ?"*
- *"Liste les pages avec des titres dupliqués"*
- *"Quelles pages font plus de 3 Mo ?"*

### Analyser une page en profondeur

Récupère n'importe quelle page web et analyse son contenu SEO : titre, meta description, headings, contenu, canonical, robots...

**Exemples de prompts :**
- *"Analyse le SEO de https://monsite.com/page-importante"*
- *"Compare le contenu de ma page vs le top 3 sur mon mot-clé"*
- *"Récupère cette page et dis-moi ce qui manque pour le SEO"*

### Tester la performance (PageSpeed + Probe)

Mesure la vitesse de tes pages avec PageSpeed Insights (Core Web Vitals réels) ou fais une analyse approfondie avec le probe Playwright : réseau, JS bloquant, images non optimisées, erreurs console...

Tu peux même faire des **tests A/B de performance** : bloque des scripts tiers, désactive des ressources, ou force le defer sur tes scripts pour voir l'impact.

**Exemples de prompts :**
- *"Teste la performance de https://monsite.com sur mobile"*
- *"Fais un probe de ma homepage et dis-moi ce qui ralentit le chargement"*
- *"Bloque Google Analytics et compare la vitesse de chargement"*
- *"Quels scripts tiers ralentissent le plus ma page ?"*
- *"Force le defer sur tous les scripts et compare les métriques"*

### Trouver des backlinks et mots-clés concurrents

Analyse les backlinks de n'importe quel site (le tien ou un concurrent) et découvre sur quels mots-clés ils se positionnent.

**Exemples de prompts :**
- *"Montre-moi les backlinks de https://concurrent.com"*
- *"Sur quels mots-clés concurrent.com se positionne en France ?"*
- *"Compare mes backlinks avec ceux de mon concurrent"*

### Trouver des idées de mots-clés (Google Ads)

Utilise le Keyword Planner de Google Ads pour trouver des idées de mots-clés avec les volumes de recherche, la concurrence et le CPC.

**Exemples de prompts :**
- *"Donne-moi des idées de mots-clés autour de 'audit seo'"*
- *"Quels mots-clés sont liés à la page https://monsite.com/services ?"*

### Analyser ton trafic Google Analytics 4

Connecte tes propriétés GA4 et analyse ton trafic : sessions, utilisateurs, pages vues, sources, appareils...

**Exemples de prompts :**
- *"Montre-moi mon trafic GA4 des 30 derniers jours"*
- *"Quelles sont mes meilleures sources de trafic ce mois ?"*
- *"Compare mon trafic mobile vs desktop sur les 7 derniers jours"*
- *"Quelles landing pages convertissent le mieux ?"*

### Exporter dans Google Sheets

Crée des Google Sheets, exporte tes données directement dedans et ajoute tes recommandations. Parfait pour partager des rapports avec tes clients ou ton équipe.

**Exemples de prompts :**
- *"Exporte mes top 100 mots-clés dans une Google Sheet"*
- *"Crée un rapport SEO complet dans une Sheet avec mes données de crawl, mes mots-clés et des recommandations"*
- *"Mets mes pages avec des erreurs dans un Sheet et ajoute des suggestions de fix"*

### Gérer un espace de travail par domaine

Chaque domaine a son propre espace de travail (une Google Sheet persistante) où tu peux suivre tes tâches SEO, stocker tes recommandations et partager avec ton équipe.

**Exemples de prompts :**
- *"Ajoute une tâche : optimiser les titres des 10 pages avec le plus d'impressions"*
- *"Montre mes tâches en cours sur cuik.io"*
- *"Marque la tâche 3 comme terminée"*

### Croiser les données (Crawl + GSC + GA4)

Combine tes données de crawl, Search Console et Analytics dans une seule requête pour des analyses croisées puissantes.

**Exemples de prompts :**
- *"Quelles pages ont un titre trop court ET zéro clic sur Search Console ?"*
- *"Croise mes données de crawl avec GA4 : quelles pages ont du trafic mais des erreurs techniques ?"*
- *"Trouve les pages avec beaucoup d'impressions GSC mais un temps de chargement lent"*

---

## Variables d'environnement

| Variable | Requise | Description |
|----------|---------|-------------|
| `CUIK_API_KEY` | Oui | Ta clé API Cuik (`sk_...`) |
| `CUIK_API_URL` | Non | URL de base de l'API (défaut : `https://staging-api.cuik.io/v1`) |

---

## Licence

AGPL-3.0
