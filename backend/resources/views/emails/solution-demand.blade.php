<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Normina — Confirmation de votre demande de diagnostic</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F8FAFC;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1A2838;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #F8FAFC;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #E2E9F3;
      box-shadow: 0 4px 16px rgba(26, 40, 56, 0.06);
    }
    .header {
      background-color: #1A2838;
      padding: 32px 40px;
      text-align: center;
      border-bottom: 2px solid #FF9500;
    }
    .logo-text {
      font-size: 26px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.5px;
      text-decoration: none;
      display: inline-block;
    }
    .logo-slogan {
      display: block;
      font-size: 11px;
      color: #8FB0DC;
      letter-spacing: 0.5px;
      margin-top: 4px;
      font-weight: 500;
    }
    .content {
      padding: 36px 40px;
      line-height: 1.6;
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #1A2838;
      margin: 0 0 16px;
    }
    p {
      margin: 0 0 16px;
      font-size: 15px;
      color: #4A6890;
    }
    .recap-box {
      background-color: #F3F6FA;
      border: 1px solid #E2E9F3;
      border-left: 4px solid #FF9500;
      border-radius: 8px;
      padding: 20px 24px;
      margin: 24px 0;
    }
    .recap-item {
      margin-bottom: 10px;
      font-size: 14px;
    }
    .recap-item:last-child {
      margin-bottom: 0;
    }
    .recap-label {
      font-weight: 700;
      color: #1A2838;
      display: inline-block;
      width: 140px;
    }
    .recap-value {
      color: #2C4A7C;
      font-weight: 600;
    }
    .cta-btn {
      display: inline-block;
      background-color: #FF9500;
      color: #FFFFFF !important;
      font-weight: 700;
      font-size: 15px;
      padding: 14px 28px;
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      margin-top: 12px;
    }
    .footer {
      background-color: #1A2838;
      color: #8FB0DC;
      padding: 28px 40px;
      text-align: center;
      font-size: 12px;
      line-height: 1.5;
    }
    .footer a {
      color: #FF9500;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <!-- Branded Header with Official Nomira Logo -->
      <div class="header">
        <table align="center" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <a href="https://www.Normina.ma" class="logo-text">
                Normina
              </a>
              <span class="logo-slogan">Regagnez vos ressources</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Main Body -->
      <div class="content">
        <h1>Demande de diagnostic bien reçue</h1>
        <p>Bonjour {{ $contact_name ?? 'Monsieur/Madame' }},</p>
        <p>Nous vous confirmons la bonne réception de votre demande pour l&apos;entreprise <strong>{{ $company ?? 'votre organisation' }}</strong>.</p>
        
        <p>Un consultant technique Normina examine actuellement vos indications afin d&apos;estimer le volume d&apos;heures économisables ainsi que les subventions applicables (jusqu&apos;à 70 %).</p>

        <div class="recap-box">
          <div class="recap-item">
            <span class="recap-label">Entreprise :</span>
            <span class="recap-value">{{ $company ?? 'N/A' }}</span>
          </div>
          <div class="recap-item">
            <span class="recap-label">Contact :</span>
            <span class="recap-value">{{ $contact_name ?? 'N/A' }}</span>
          </div>
          <div class="recap-item">
            <span class="recap-label">Téléphone :</span>
            <span class="recap-value">{{ $phone ?? 'N/A' }}</span>
          </div>
          <div class="recap-item">
            <span class="recap-label">Échéance de réponse :</span>
            <span class="recap-value">Sous 24h ouvrées</span>
          </div>
        </div>

        <p>Besoin d&apos;un échange urgent ou de compléments d&apos;informations ? Vous pouvez nous contacter directement sur WhatsApp au +212 6 61 57 42 47.</p>

        <div style="text-align: center; margin: 30px 0 10px;">
          <a href="https://wa.me/212661574247" class="cta-btn">
            Échanger directement sur WhatsApp
          </a>
        </div>
      </div>

      <!-- Branded Footer -->
      <div class="footer">
        <p style="margin: 0 0 8px; font-weight: 600; color: #FFFFFF;">
          Normina — Regagnez vos ressources
        </p>
        <p style="margin: 0 0 8px;">
          Micro-solutions logicielles ciblées · Déploiement en 4 jours
        </p>
        <p style="margin: 0;">
          Casablanca · Paris · <a href="https://www.Normina.ma">www.Normina.ma</a> · <a href="mailto:contact@normina.ma">contact@normina.ma</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>

