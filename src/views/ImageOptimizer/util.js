export default function formatFileSize(value) {
  let valWip = Math.floor(value / (8 * 1024 * 1024 * 1024))
  if (valWip) {
    return `${valWip} GB`
  }
  valWip = Math.floor(value / (8 * 1024 * 1024))
  if (valWip) {
    return `${valWip} MB`
  }
  valWip = Math.floor(value / (8 * 1024))
  if (valWip) {
    return `${valWip} KB`
  }
  return `${(value / (8 * 1024)).toFixed(2)} KB`
}
