# Cuik MCP

Connecte Claude à tes données SEO. Analyse ton site, tes mots-clés, ton trafic — et obtiens des recommandations actionnables directement dans la conversation.

## Installation

### 1. Récupère ta clé API

Va sur [app.cuik.io/fr/settings](https://app.cuik.io/fr/settings) et copie ta clé API (elle commence par `sk_`).

### 2. Configure Claude

Choisis **l'une** des deux options selon ton utilisation :

<details>
<summary><strong>Option A — Claude Desktop</strong></summary>

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

Redémarre Claude Desktop pour charger le MCP.

</details>

<details>
<summary><strong>Option B — Claude Code (CLI)</strong></summary>

```bash
claude mcp add cuik -- npx -y github:Nemzytch/cuik-mcp
```

Puis ajoute ta clé API dans ton environnement :

```bash
export CUIK_API_KEY="sk_ta_cle_ici"
```

Redémarre Claude Code pour charger le MCP.

</details>

---

## Ce que tu peux faire

### 🔍 Mots-clés Google Search Console

Accède à toutes tes données Search Console directement dans Claude. Visualise tes meilleurs mots-clés, suis tes positions, et identifie des opportunités de trafic.

> *"Montre-moi mes 20 meilleurs mots-clés sur cuik.io ce mois-ci"*
>
> *"Quels mots-clés sont entre la position 5 et 15 avec le plus d'impressions ?"*
>
> *"Compare mon trafic cette semaine vs la semaine dernière, quels mots-clés j'ai perdu ?"*
>
> *"Quels sont mes mots-clés en position 1 à 3 ?"*

---

### 📄 Performance de tes pages

Analyse les performances de tes pages : clics, impressions, CTR, positions — et croise avec tes données de crawl.

> *"Quelles sont mes 10 pages avec le plus de clics ?"*
>
> *"Quelles pages ont perdu du trafic entre ce mois et le mois dernier ?"*
>
> *"Montre-moi les pages qui ont beaucoup d'impressions mais un CTR faible"*

---

### 🕷️ Crawl SEO complet

Lance un crawl SEO de ton site et analyse les résultats : erreurs, titres manquants, redirections, contenu dupliqué, et plus encore.

> *"Crawle https://monsite.com"*
>
> *"Montre-moi toutes les pages avec un status 404 ou 301"*
>
> *"Quelles pages n'ont pas de H1 ?"*
>
> *"Liste les pages avec des titres dupliqués"*

---

### 🔎 Analyse SEO d'une page

Récupère n'importe quelle page web et analyse son contenu SEO : titre, meta description, headings, canonical, robots...

> *"Analyse le SEO de https://monsite.com/page-importante"*
>
> *"Compare le contenu de ma page vs le top 3 sur mon mot-clé"*
>
> *"Récupère cette page et dis-moi ce qui manque pour le SEO"*

---

### ⚡ Performance & vitesse

Mesure la vitesse de tes pages avec les Core Web Vitals réels, ou fais une analyse approfondie : réseau, JS bloquant, images non optimisées, erreurs console...

Tu peux même faire des **tests A/B de performance** : bloque des scripts tiers, désactive des ressources, ou force le defer sur tes scripts pour voir l'impact.

> *"Teste la performance de https://monsite.com sur mobile"*
>
> *"Dis-moi ce qui ralentit le chargement de ma homepage"*
>
> *"Bloque Google Analytics et compare la vitesse de chargement"*
>
> *"Quels scripts tiers ralentissent le plus ma page ?"*

---

### 🔗 Backlinks & mots-clés concurrents

Analyse les backlinks de n'importe quel site (le tien ou un concurrent) et découvre sur quels mots-clés ils se positionnent.

> *"Montre-moi les backlinks de https://concurrent.com"*
>
> *"Sur quels mots-clés concurrent.com se positionne en France ?"*
>
> *"Compare mes backlinks avec ceux de mon concurrent"*

---

### 💡 Idées de mots-clés

Trouve des idées de mots-clés avec les volumes de recherche, la concurrence et le CPC.

> *"Donne-moi des idées de mots-clés autour de 'audit seo'"*
>
> *"Quels mots-clés sont liés à la page https://monsite.com/services ?"*

---

### 📊 Trafic Google Analytics 4

Connecte tes propriétés GA4 et analyse ton trafic : sessions, utilisateurs, pages vues, sources, appareils...

> *"Montre-moi mon trafic GA4 des 30 derniers jours"*
>
> *"Quelles sont mes meilleures sources de trafic ce mois ?"*
>
> *"Compare mon trafic mobile vs desktop sur les 7 derniers jours"*

---

### 📋 Export Google Sheets

Crée des Google Sheets, exporte tes données directement dedans et ajoute tes recommandations. Parfait pour partager des rapports avec tes clients ou ton équipe.

> *"Exporte mes top 100 mots-clés dans une Google Sheet"*
>
> *"Crée un rapport SEO complet avec mes données de crawl, mes mots-clés et des recommandations"*
>
> *"Mets mes pages avec des erreurs dans un Sheet et ajoute des suggestions de fix"*

---

### ✅ Espace de travail

Chaque domaine a son propre espace de travail où tu peux suivre tes tâches SEO, stocker tes recommandations et partager avec ton équipe.

> *"Ajoute une tâche : optimiser les titres des 10 pages avec le plus d'impressions"*
>
> *"Montre mes tâches en cours sur cuik.io"*
>
> *"Marque la tâche 3 comme terminée"*

---

### 🧩 Croisement de données

Combine tes données de crawl, Search Console et Analytics dans une seule requête pour des analyses croisées puissantes.

> *"Quelles pages ont un titre trop court ET zéro clic sur Search Console ?"*
>
> *"Croise mes données de crawl avec GA4 : quelles pages ont du trafic mais des erreurs techniques ?"*
>
> *"Trouve les pages avec beaucoup d'impressions GSC mais un temps de chargement lent"*

---

## Variable d'environnement

| Variable | Requise | Description |
|----------|---------|-------------|
| `CUIK_API_KEY` | Oui | Ta clé API Cuik (`sk_...`) |

---

## Licence

AGPL-3.0
