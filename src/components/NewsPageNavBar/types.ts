export default interface NewsPageNavBarTypes {
  country: string
  category: string
  currentNewsAPIRequest: string
  onCountryChange: (country: string) => void
  onCategoryChange: (cathegory: string) => void
  onChange: (country: string, cathegory: string) => void
  onSearch: (country: string, query: string) => void
}
