const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    pageUrl: query.pageUrl || '',
    missionId: query.missionId || '',
  }
  return request(
    `/api/nmusician/workbench/mission/visit/page`,
    data,
    createOption(query, 'weapi'),
  )
}
