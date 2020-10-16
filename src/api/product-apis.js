import jsonAxios from "../common-components/authorization/json-fetch"
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers"

export const fetchProductsByKeySearch = (storeId, value) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/products/search/${value}`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductByProductId = (storeId, productId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/product/${productId}`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductsByCategoryId = (storeId, categoryId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/categories/${categoryId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=20&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductsBySubCategoryId = (storeId, subCategoryId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/sub-categories/${subCategoryId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=20&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductsByClassificationId = (storeId, classificationId) => {
  try {
    // beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/classifications/:classificationId/addon/web/products?pageSize=20&page=1
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/classifications/${classificationId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=20&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductsByStoreSectionId = (storeId, storeSectionId) => {
  try {
    // beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/store-sections/:storeSectionId/addon/web/products?pageSize=20&page=1
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/classifications/${storeSectionId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=20&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductHighlights = (storeId) => {
  try {
    // http://beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/addon/web/highlights
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/addon/${process.env.REACT_APP_URL_ADDON}/highlights`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductsByProductHighlightId = (
  storeId,
  productHighlightId
) => {
  try {
    // http://beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/highlights/5f67bd984ca0e319e9e6166b/addon/web/products?pageSize=20&page=1
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/highlights/${productHighlightId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=20&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProducts = (storeId, categoriesId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/categories/${categoriesId}/products`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

export const fetchProductDetail = (storeId, productId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/product/${productId}`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}

/* Testing suggested for you - UI (in prod desc) for 8(pageSize) products as per design */
export const fetchSuggestedProducts = (storeId, productHighlightId) => {
  try {
    // http://beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/highlights/5f67bd984ca0e319e9e6166b/addon/web/products?pageSize=20&page=1
    // pulling data for 8(pageSize) products as per design
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/highlights/${productHighlightId}/addon/${process.env.REACT_APP_URL_ADDON}/products?pageSize=14&page=1`
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: getJsonHeaderWithoutToken(),
    })
    return response
  } catch (err) {
    throw err
  }
}
