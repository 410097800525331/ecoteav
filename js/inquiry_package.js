$(function () {
  const rows_per_page = 5
  let current_page = 1

  const board_data = [
    // page 1
    [
      { no: 28, status: 'blue', text: '확인중', title: '고객 문의 [3]', writer: '이****', date: '2025-11' },
      { no: 27, status: 'ing', text: '진행중', title: '고객 문의 [3]', writer: '이****', date: '2025-11' },
      { no: 26, status: 'ing', text: '진행중', title: '고객 문의 [3]', writer: '이****', date: '2025-11' },
      { no: 25, status: 'oking', text: '답변대기', title: '고객 문의 [3]', writer: '이****', date: '2025-11' },
      { no: 24, status: 'oking', text: '답변대기', title: '고객 문의 [1]', writer: '허****', date: '2025-11' },
      { no: 23, status: 'ing', text: '진행중', title: '고객 문의 [1]', writer: '김****', date: '2025-11' },
      { no: 22, status: 'oking', text: '답변대기', title: '고객 문의 [1]', writer: '김****', date: '2025-11' },
      { no: 21, status: 'ok', text: '답변완료', title: '최종 확인 요청 [1]', writer: '김****', date: '2025-11' },
    ],
    // page 2
    [
      { no: 20, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '추****', date: '2025-10' },
      { no: 19, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '추****', date: '2025-10' },
      { no: 18, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '추****', date: '2025-10' },
      { no: 17, status: 'ok', text: '답변완료', title: '최종 확인 요청 [2]', writer: '추****', date: '2025-10' },
      { no: 16, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '추****', date: '2025-10' },
      { no: 15, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '추****', date: '2025-10' },
      { no: 14, status: 'ok', text: '답변완료', title: '최종 확인 요청 [3]', writer: '신****', date: '2025-10' },
      { no: 13, status: 'ok', text: '답변완료', title: '고객 문의 [1]', writer: '최****', date: '2025-10' },
      { no: 12, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '강****', date: '2025-10' },
      { no: 11, status: 'ok', text: '답변완료', title: '고객 문의 [1]', writer: '사****', date: '2025-10' },
    ],
    // page 3
    [
      { no: 10, status: 'ok', text: '답변완료', title: '최종 확인 요청 [1]', writer: '김****', date: '2025-09' },
      { no: 9, status: 'ok', text: '답변완료', title: '최종 확인 요청 [1]', writer: '김****', date: '2025-09' },
      { no: 8, status: 'ok', text: '답변완료', title: '고객 문의 [1]', writer: '정****', date: '2025-09' },
      { no: 7, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '윤****', date: '2025-09' },
      { no: 6, status: 'ok', text: '답변완료', title: '최종 확인 요청 [1]', writer: '김****', date: '2025-09' },
      { no: 5, status: 'ok', text: '답변완료', title: '고객 문의 [1]', writer: '정****', date: '2025-09' },
      { no: 4, status: 'ok', text: '진행불가', title: '고객 문의 [2]', writer: '윤****', date: '2025-09' },
      { no: 3, status: 'ok', text: '답변완료', title: '최종 확인 요청 [1]', writer: '김****', date: '2025-09' },
      { no: 2, status: 'ok', text: '답변완료', title: '고객 문의 [1]', writer: '정****', date: '2025-09' },
      { no: 1, status: 'ok', text: '답변완료', title: '고객 문의 [2]', writer: '윤****', date: '2025-09' },
    ]
  ]

  function render_page(page) {
    current_page = page
    const rows = board_data[page - 1] || []
    const $tbody = $('.board_table tbody')

    $tbody.empty()

    rows.forEach(row => {
      $tbody.append(`
        <tr>
          <td>${row.no}</td>
          <td><span class="status status_${row.status}">${row.text}</span></td>
          <td class="title_td">${row.title}</td>
          <td>${row.writer}</td>
          <td>${row.date}</td>
        </tr>
      `)
    })

    $('.page_btn').removeClass('is_active')
    $('.page_btn[data-page="' + page + '"]').addClass('is_active')

    $('.page_btn[data-page="prev"]').toggleClass('is_disabled', page === 1)
    $('.page_btn[data-page="next"]').toggleClass('is_disabled', page === board_data.length)
  }

  $('.page_btn').on('click', function () {
    const page = $(this).data('page')

    if ($(this).hasClass('is_disabled')) return

    if (page === 'prev') render_page(current_page - 1)
    else if (page === 'next') render_page(current_page + 1)
    else render_page(Number(page))
  })

  render_page(1)
})