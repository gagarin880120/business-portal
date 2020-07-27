export default interface NewsPageNavBarTypes {
  country: string
  cathegory: string
  onCountryChange: (country: string) => void
  onCathegoryChange: (cathegory: string) => void
  onChange: (country: string, cathegory: string) => void
}
