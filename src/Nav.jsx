import { NavLink } from "react-router-dom"

function Nav() {

    const NavS = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/project' >Project</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavS}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-2 ">
                        <img className=" h-[30px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADVUlEQVR4AdXWA6xlOxQA0D5b37Zt27Zt27Zt27Zt27ZtDE5nJembnFyOcZN1vbvrNoxWj31WeChQw9gsysZswuKMTWA4JYZx2JvX+I+Y/M+r7EQXgWGefBYeIuNXHuIUDucqvqEfVzM+gWGWfHpepC/XMT8thKSO2bmXyFV0DqsKdHAzkZNpJ1CqohPzGP3ZmcBQt34j+vIQY1Ht/4vzK28zydBWoI0H+JeVCFSLaeAKIlsSGOIKzM1vPEYn1WNgdfpzDXUMcffvQORQAoMaOzlf8iZjDU0FziGyOiFpZ1W2ZuoyE7KF43mcKYe0Ag3cwT/MR6CWw/mfyEtsyEosxkyMRV1ux2we0gq08Ai/MSuBsXidWCCjD7/wJleyGRNTM6QVaOZB/mB2Am3cS0z+5HJO5VIe5nP6kvEBhzEpgeqJkxrquIH/WYyQzMudvMAeNOViWpiU1bmMH4i8wVrUUzX5jGxNHccT2YSQ00IXtZQrq545uZS/+YMDaaHigfMSbzMm6xM5lcCQDGUTG/AJfTgyfVf0x4l4nIwLaWVavuUlxqRyMpiIrdmC8QjJwrzLf+xAIORPs1OIXEkPgUZupA8rE6hUgR7uJCbX005IluEHvmJOUqAP/MDrTE7IWYs+3EonocK4z8fvxORHZiEkNRxM5ELq0w8Dv9yOQL7QLh7kfx5mP7opVYGp+IiYvMVEBeVNwrt8xcy9k+RuvmLKMuf80cSkP7uX2YI7eJjIEyxf2KDkFDK2CWlyvcqztJepwEXEnEvLFLwR//E8ExLK9NRGZJyS316fqVCBjfiLyN9sQigwFx/yN+tUmCv54/qCkJbbg3zJlJRby2tzIuukzyFnVl4gchqNZZPDbkSO7P3iWCI7Dea5X8fyvEnkRsamUkwXD/M3K/V+uSC/8D6zVV3vMDFH8xP9uY4JqnR9LXvQj7vpzu/bJ5DxMivSSijQyNTszptEfuFIemhmTGoorHAXe/AbHzMfRbvYWfzLXzzM8ezObhzD7XxFxt/cwZLUMT7n8Rpnsw2rszYH8BR9eYXFCJS8hKzLA/xGLPA3b3E2S9NGfhgf4ldikiV9+ICjKt4NcoW1MTvrszt7sBHzMza1lIprZ3Y2YF8OYReWY8Jc3KjzGABKY6329Mh/ZAAAAABJRU5ErkJggg==" alt="" />
                        <a className="text-xl">Redux 2</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavS}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
