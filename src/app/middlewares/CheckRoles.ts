import { Request, Response, NextFunction } from 'express';

export function checkRole(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as { role?: string }; // ou conforme seu tipo real

        if (!user || !user.role) {
            return res.status(401).json({ message: 'Usuário não autenticado' });
        }

        if (!allowedRoles.includes(user.role)) {
            return res.status(403).json({ message: 'Acesso não autorizado para este perfil' });
        }

        return next();
    };
}
