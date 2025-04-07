"use client"

import { useState, useEffect } from "react"
import "./pagination.css"

interface PaginationProps {
    totalItems: number
    itemsPerPage: number
    initialPage?: number
    onPageChange?: (page: number) => void
}

export default function Pagination({ totalItems, itemsPerPage, initialPage = 1, onPageChange }: PaginationProps) {
    console.log(initialPage)
    const [currentPage, setCurrentPage] = useState(initialPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // Reset to page 1 if totalItems or itemsPerPage changes
    useEffect(() => {
        setCurrentPage(initialPage)
    }, [totalItems, itemsPerPage])

    // Ensure current page is valid when totalPages changes
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(Math.max(1, totalPages))
        }
    }, [totalPages, currentPage])

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return
        setCurrentPage(page)
        if (onPageChange) onPageChange(page)
    }

    // Calculate the range of items being displayed
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    const renderPageNumbers = () => {
        if (totalPages <= 1) return null

        const pages = []
        const maxVisiblePages = 3

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        if (startPage > 1) {
            pages.push(
                <button key={1} onClick={() => handlePageChange(1)} className="pagination-item">
                    1
                </button>,
            )
            if (startPage > 2) {
                pages.push(
                    <span key="start-ellipsis" className="pagination-ellipsis">
            ...
          </span>,
                )
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`pagination-item ${currentPage === i ? "active" : ""}`}
                    aria-current={currentPage === i ? "page" : undefined}
                >
                    {i}
                </button>,
            )
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <span key="end-ellipsis" className="pagination-ellipsis">
            ...
          </span>,
                )
            }
            pages.push(
                <button key={totalPages} onClick={() => handlePageChange(totalPages)} className="pagination-item">
                    {totalPages}
                </button>,
            )
        }

        return pages
    }

    if (totalItems === 0) {
        return null // Don't render pagination if there are no items
    }

    return (
        <div className="pagination-container">
            <div className="pagination-info">
                Showing {startItem} to {endItem} of {totalItems} items
            </div>

            <nav className="pagination" aria-label="Pagination">
                <button
                    className="pagination-prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    Previous
                </button>

                <div className="pagination-numbers">{renderPageNumbers()}</div>

                <button
                    className="pagination-next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    Next
                </button>
            </nav>
        </div>
    )
}

