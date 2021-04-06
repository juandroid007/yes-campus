<script context="module">
  const validateExternalSrc = str =>
    str.indexOf("http://") == 0 || str.indexOf("https://") == 0

  const getPath = src => validateExternalSrc(src) ? src : `/images/${src}`
  const getExtension = path => path.split('.').pop()
  const pathWithoutExtension = path => path.substr(0, path.length - getExtension(path).length)

  const getType = extension => {
    const types = {
      'image/aces':['exr'],
      'image/apng':['apng'],
      'image/avif':['avif'],
      'image/bmp':['bmp'],
      'image/cgm':['cgm'],
      'image/dicom-rle':['drle'],
      'image/emf':['emf'],
      'image/fits':['fits'],
      'image/g3fax':['g3'],
      'image/gif':['gif'],
      'image/heic':['heic'],
      'image/heic-sequence':['heics'],
      'image/heif':['heif'],
      'image/heif-sequence':['heifs'],
      'image/hej2k':['hej2'],
      'image/hsj2':['hsj2'],
      'image/ief':['ief'],
      'image/jls':['jls'],
      'image/jp2':['jp2','jpg2'],
      'image/jpeg':['jpeg','jpg','jpe'],
      'image/jph':['jph'],
      'image/jphc':['jhc'],
      'image/jpm':['jpm'],
      'image/jpx':['jpx','jpf'],
      'image/jxr':['jxr'],
      'image/jxra':['jxra'],
      'image/jxrs':['jxrs'],
      'image/jxs':['jxs'],
      'image/jxsc':['jxsc'],
      'image/jxsi':['jxsi'],
      'image/jxss':['jxss'],
      'image/ktx':['ktx'],
      'image/ktx2':['ktx2'],
      'image/png':['png'],
      'image/sgi':['sgi'],
      'image/svg+xml':['svg','svgz'],
      'image/t38':['t38'],
      'image/tiff':['tif','tiff'],
      'image/tiff-fx':['tfx'],
      'image/webp':['webp'],
      'image/wmf':['wmf'],
    }
    let type = false
    for (let t of Object.keys(types)) {
      if (types[t].includes(extension)) {
        type = t
        break
      }
    }
    return type
  }
  const isWebpAvailable = type => ['image/png', 'image/jpeg', 'image/tiff', 'image/webp'].includes(type)

  export const getImg = src => validateExternalSrc(src) ?
    getPath(src) :
    (
      isWebpAvailable(getType(getExtension(src))) ?
      pathWithoutExtension(getPath(src)) + 'webp' :
      getPath(src)
    )
</script>

<script>
  let _class = ''
  let _style = ''
  export { _class as class }
  export { _style as style }

  export let src
  export let alt = 'Alt'
  let path

  $: isExternal = validateExternalSrc(src)
  $: webpPath = getImg(src)
  $: path = getPath(src)
  $: extension = getExtension(path)
  $: type = getType(extension)
</script>

{#if isExternal}
  <img src={path} {alt} class="{_class}" style="{_style}">
{:else}
  <picture>
    {#if isWebpAvailable(type)}
      <source srcset={webpPath} type="image/webp">
    {/if}
    <source srcset={path} {type}>
    <img src={path} {alt} class="{_class}" style="{_style}">
  </picture>
{/if}
