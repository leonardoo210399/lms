export const formatPrice = (price: number) =>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(price)
}