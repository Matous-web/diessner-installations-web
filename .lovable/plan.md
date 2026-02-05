

# Implementace odesílání kontaktního formuláře

## Shrnutí
Zprovozním kontaktní formulář tak, aby se vyplněné zprávy odesílaly na email **matous.poko@gmail.com**. Použiji službu **Web3Forms**, která je zdarma a nevyžaduje složitou konfiguraci.

## Jak to bude fungovat
1. Návštěvník vyplní formulář na webu
2. Po kliknutí na "Odeslat zprávu" se data odešlou přes Web3Forms API
3. Web3Forms přepošle zprávu na váš email
4. Návštěvník uvidí potvrzení o úspěšném odeslání

## Co je potřeba udělat

### Krok 1: Získání přístupového klíče (access key)
- Navštivte stránku **https://web3forms.com**
- Zadejte email **matous.poko@gmail.com**
- Obdržíte přístupový klíč na email
- Tento klíč je veřejný (lze bezpečně vložit do kódu)

### Krok 2: Úprava kontaktního formuláře
Upravím soubor `src/components/ContactSection.tsx`:

- Přidám stav pro sledování odesílání (`isSubmitting`)
- Upravím funkci `handleSubmit` pro odeslání dat na Web3Forms API
- Přidám zpracování úspěšného odeslání i chybových stavů
- Přidám validaci vstupů před odesláním
- Tlačítko bude během odesílání zobrazovat "Odesílám..." a bude neaktivní

---

## Technické detaily

### Změny v ContactSection.tsx

```typescript
// Nové stavy
const [isSubmitting, setIsSubmitting] = useState(false);

// Nová funkce handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'VÁŠ_KLÍČ_Z_WEB3FORMS',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Neuvedeno',
        message: formData.message,
        subject: 'Nová zpráva z webu Filpastav'
      })
    });
    
    if (response.ok) {
      // Zobrazí úspěšnou notifikaci
      // Vymaže formulář
    } else {
      // Zobrazí chybovou notifikaci
    }
  } catch (error) {
    // Zobrazí chybovou notifikaci
  } finally {
    setIsSubmitting(false);
  }
};
```

### Úprava tlačítka
```tsx
<Button 
  type="submit" 
  disabled={isSubmitting}
  className="w-full ..."
>
  {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
</Button>
```

---

## Další kroky po schválení
1. Po schválení plánu vás požádám o vložení přístupového klíče z Web3Forms
2. Implementuji změny do kódu
3. Otestuji funkčnost formuláře

