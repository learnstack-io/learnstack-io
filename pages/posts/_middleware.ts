import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { pathname } = req.nextUrl
    
    if (pathname == "/posts") {
        return NextResponse.redirect("/courses")
    }
    
    return NextResponse.next()
}